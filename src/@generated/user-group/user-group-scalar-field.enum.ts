import { registerEnumType } from '@nestjs/graphql';

export enum UserGroupScalarFieldEnum {
    id = "id",
    title = "title"
}


registerEnumType(UserGroupScalarFieldEnum, { name: 'UserGroupScalarFieldEnum', description: undefined })
