import { registerEnumType } from '@nestjs/graphql';

export enum GroupChannelScalarFieldEnum {
    id = "id",
    userGroupId = "userGroupId"
}


registerEnumType(GroupChannelScalarFieldEnum, { name: 'GroupChannelScalarFieldEnum', description: undefined })
