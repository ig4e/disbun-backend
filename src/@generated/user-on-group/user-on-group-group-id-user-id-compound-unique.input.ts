import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserOnGroupGroupIdUserIdCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    groupId!: string;

    @Field(() => String, {nullable:false})
    userId!: string;
}
