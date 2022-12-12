import { registerEnumType } from '@nestjs/graphql';

export enum UserImageScalarFieldEnum {
    id = "id",
    userId = "userId"
}


registerEnumType(UserImageScalarFieldEnum, { name: 'UserImageScalarFieldEnum', description: undefined })
