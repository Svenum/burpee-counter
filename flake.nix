{
  description = "Flake to build the burpee-counter website";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem ( system:
    let
      pkgs = import nixpkgs { inherit system; };
    in
    with pkgs; rec {
      packages.app = pkgs.buildNpmPackage rec {
        name = "burpee-counter";
        version = "1.0.0";
        src = ./.;

        nodejs = pkgs.nodejs_22;

        npmDeps = pkgs.importNpmLock {
          npmRoot = ./.;
        };

        npmConfigHook = pkgs.importNpmLock.npmConfigHook;

        meta = {
          description = "Burpee-counter";
          homepage = "https://github.com/Svenum/burpee-counter";
          maintainers = with lib.maintainers; [ "Svenum" ];
        };
      };

      defaultPackage = packages.app;
    });
}
