import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    username = "username",
    discriminator = "discriminator",
    email = "email",
    password = "password",
    verified = "verified",
    staff = "staff",
    locale = "locale",
    dateOfBirth = "dateOfBirth",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    messageReactionId = "messageReactionId"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
