import { registerEnumType } from '@nestjs/graphql';

export enum UserRelationType {
    NONE = "NONE",
    PENDING = "PENDING",
    BLOCKED = "BLOCKED"
}


registerEnumType(UserRelationType, { name: 'UserRelationType', description: undefined })
