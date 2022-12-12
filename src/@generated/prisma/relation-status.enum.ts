import { registerEnumType } from '@nestjs/graphql';

export enum RelationStatus {
    NONE = "NONE",
    PENDING = "PENDING",
    FRIENDS = "FRIENDS",
    BLOCKED = "BLOCKED"
}


registerEnumType(RelationStatus, { name: 'RelationStatus', description: undefined })
