import { registerEnumType } from '@nestjs/graphql';

export enum UserOnGroupScalarFieldEnum {
    owner = "owner",
    groupId = "groupId",
    userId = "userId"
}


registerEnumType(UserOnGroupScalarFieldEnum, { name: 'UserOnGroupScalarFieldEnum', description: undefined })
