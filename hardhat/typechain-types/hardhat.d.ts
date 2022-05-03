/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "ChallengeGuessTheNumber",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ChallengeGuessTheNumber__factory>;
    getContractFactory(
      name: "ChallengeFactoyGuessTheNumber",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ChallengeFactoyGuessTheNumber__factory>;
    getContractFactory(
      name: "CTFs",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CTFs__factory>;
    getContractFactory(
      name: "ICTF",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICTF__factory>;
    getContractFactory(
      name: "ICTFFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ICTFFactory__factory>;
    getContractFactory(
      name: "IPlayer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPlayer__factory>;
    getContractFactory(
      name: "Player",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Player__factory>;

    getContractAt(
      name: "ChallengeGuessTheNumber",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ChallengeGuessTheNumber>;
    getContractAt(
      name: "ChallengeFactoyGuessTheNumber",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ChallengeFactoyGuessTheNumber>;
    getContractAt(
      name: "CTFs",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CTFs>;
    getContractAt(
      name: "ICTF",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ICTF>;
    getContractAt(
      name: "ICTFFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ICTFFactory>;
    getContractAt(
      name: "IPlayer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPlayer>;
    getContractAt(
      name: "Player",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Player>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}