export enum Permission {
    NoAccess = "NoAccess",
    Access = "Access"
}
export default interface FloorModel {
    name: string,
      soldiers: number,
      purpose: string,
      description: string
      activity: string
}