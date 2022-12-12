import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumUserProfileUploadTypeFieldUpdateOperationsInput } from '../prisma/enum-user-profile-upload-type-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutProfileUploadsNestedInput } from '../user/user-update-one-required-without-profile-uploads-nested.input';

@InputType()
export class UserProfileUploadUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumUserProfileUploadTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumUserProfileUploadTypeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutProfileUploadsNestedInput, {nullable:true})
    User?: UserUpdateOneRequiredWithoutProfileUploadsNestedInput;
}
