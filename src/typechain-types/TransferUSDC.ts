/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface TransferUSDCInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "acceptOwnership"
      | "allowlistDestinationChain"
      | "allowlistedChains"
      | "owner"
      | "transferOwnership"
      | "transferUsdc"
      | "withdrawToken"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "OwnershipTransferRequested"
      | "OwnershipTransferred"
      | "UsdcTransferred"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "acceptOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allowlistDestinationChain",
    values: [BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "allowlistedChains",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferUsdc",
    values: [BigNumberish, AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawToken",
    values: [AddressLike, AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allowlistDestinationChain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allowlistedChains",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferUsdc",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawToken",
    data: BytesLike
  ): Result;
}

export namespace OwnershipTransferRequestedEvent {
  export type InputTuple = [from: AddressLike, to: AddressLike];
  export type OutputTuple = [from: string, to: string];
  export interface OutputObject {
    from: string;
    to: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [from: AddressLike, to: AddressLike];
  export type OutputTuple = [from: string, to: string];
  export interface OutputObject {
    from: string;
    to: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UsdcTransferredEvent {
  export type InputTuple = [
    messageId: BytesLike,
    destinationChainSelector: BigNumberish,
    receiver: AddressLike,
    amount: BigNumberish,
    ccipFee: BigNumberish
  ];
  export type OutputTuple = [
    messageId: string,
    destinationChainSelector: bigint,
    receiver: string,
    amount: bigint,
    ccipFee: bigint
  ];
  export interface OutputObject {
    messageId: string;
    destinationChainSelector: bigint;
    receiver: string;
    amount: bigint;
    ccipFee: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface TransferUSDC extends BaseContract {
  connect(runner?: ContractRunner | null): TransferUSDC;
  waitForDeployment(): Promise<this>;

  interface: TransferUSDCInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  acceptOwnership: TypedContractMethod<[], [void], "nonpayable">;

  allowlistDestinationChain: TypedContractMethod<
    [_destinationChainSelector: BigNumberish, _allowed: boolean],
    [void],
    "nonpayable"
  >;

  allowlistedChains: TypedContractMethod<
    [arg0: BigNumberish],
    [boolean],
    "view"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  transferOwnership: TypedContractMethod<
    [to: AddressLike],
    [void],
    "nonpayable"
  >;

  transferUsdc: TypedContractMethod<
    [
      _destinationChainSelector: BigNumberish,
      _receiver: AddressLike,
      _amount: BigNumberish,
      _gasLimit: BigNumberish
    ],
    [string],
    "nonpayable"
  >;

  withdrawToken: TypedContractMethod<
    [_beneficiary: AddressLike, _token: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "acceptOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "allowlistDestinationChain"
  ): TypedContractMethod<
    [_destinationChainSelector: BigNumberish, _allowed: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "allowlistedChains"
  ): TypedContractMethod<[arg0: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[to: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "transferUsdc"
  ): TypedContractMethod<
    [
      _destinationChainSelector: BigNumberish,
      _receiver: AddressLike,
      _amount: BigNumberish,
      _gasLimit: BigNumberish
    ],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "withdrawToken"
  ): TypedContractMethod<
    [_beneficiary: AddressLike, _token: AddressLike],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "OwnershipTransferRequested"
  ): TypedContractEvent<
    OwnershipTransferRequestedEvent.InputTuple,
    OwnershipTransferRequestedEvent.OutputTuple,
    OwnershipTransferRequestedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "UsdcTransferred"
  ): TypedContractEvent<
    UsdcTransferredEvent.InputTuple,
    UsdcTransferredEvent.OutputTuple,
    UsdcTransferredEvent.OutputObject
  >;

  filters: {
    "OwnershipTransferRequested(address,address)": TypedContractEvent<
      OwnershipTransferRequestedEvent.InputTuple,
      OwnershipTransferRequestedEvent.OutputTuple,
      OwnershipTransferRequestedEvent.OutputObject
    >;
    OwnershipTransferRequested: TypedContractEvent<
      OwnershipTransferRequestedEvent.InputTuple,
      OwnershipTransferRequestedEvent.OutputTuple,
      OwnershipTransferRequestedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "UsdcTransferred(bytes32,uint64,address,uint256,uint256)": TypedContractEvent<
      UsdcTransferredEvent.InputTuple,
      UsdcTransferredEvent.OutputTuple,
      UsdcTransferredEvent.OutputObject
    >;
    UsdcTransferred: TypedContractEvent<
      UsdcTransferredEvent.InputTuple,
      UsdcTransferredEvent.OutputTuple,
      UsdcTransferredEvent.OutputObject
    >;
  };
}
