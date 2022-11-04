export enum ActionEnum {
  CREATE_TASK = "CREATE::TASK",
  LIST_TASK = "LIST::TASK",
}

export interface ActionFactoryProvider {
  getAction: (action: ActionEnum) => ActionCommandProvider;
}

export interface ActionCommandProvider {
  execute: () => Promise<void>;
}

export type ActionsCollectProvider = {
  [K in ActionEnum]: ActionCommandProvider;
};
