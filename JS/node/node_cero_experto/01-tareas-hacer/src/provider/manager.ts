export abstract class ManagerProvider {
  abstract createTask: (description: string) => void;
}
