import { registerEnumType } from '@nestjs/graphql';

export enum UserProfileUploadType {
    AVATAR = "AVATAR",
    BANNER = "BANNER",
    OTHER = "OTHER"
}


registerEnumType(UserProfileUploadType, { name: 'UserProfileUploadType', description: undefined })
