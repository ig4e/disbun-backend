import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserProfileUploadType } from './user-profile-upload-type.enum';

@InputType()
export class EnumUserProfileUploadTypeFieldUpdateOperationsInput {

    @Field(() => UserProfileUploadType, {nullable:true})
    set?: keyof typeof UserProfileUploadType;
}
