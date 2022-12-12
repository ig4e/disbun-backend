import { registerEnumType } from '@nestjs/graphql';

export enum UserRelationScalarFieldEnum {
    status = "status",
    relatedUserId = "relatedUserId",
    userId = "userId"
}


registerEnumType(UserRelationScalarFieldEnum, { name: 'UserRelationScalarFieldEnum', description: undefined })
