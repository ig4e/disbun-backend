import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRelationType } from '../user/user-relation-type.enum';

@InputType()
export class EnumUserRelationTypeFieldUpdateOperationsInput {

    @Field(() => UserRelationType, {nullable:true})
    set?: keyof typeof UserRelationType;
}
