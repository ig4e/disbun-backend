import { registerEnumType } from '@nestjs/graphql';

export enum UserLocale {
    EN_US = "EN_US"
}


registerEnumType(UserLocale, { name: 'UserLocale', description: undefined })
