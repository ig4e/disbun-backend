import { registerEnumType } from '@nestjs/graphql';

export enum GroupImageScalarFieldEnum {
    id = "id",
    userGroupId = "userGroupId"
}


registerEnumType(GroupImageScalarFieldEnum, { name: 'GroupImageScalarFieldEnum', description: undefined })
