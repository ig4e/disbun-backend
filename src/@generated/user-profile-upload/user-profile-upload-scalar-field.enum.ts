import { registerEnumType } from '@nestjs/graphql';

export enum UserProfileUploadScalarFieldEnum {
    id = "id",
    type = "type",
    createdAt = "createdAt",
    userId = "userId"
}


registerEnumType(UserProfileUploadScalarFieldEnum, { name: 'UserProfileUploadScalarFieldEnum', description: undefined })
