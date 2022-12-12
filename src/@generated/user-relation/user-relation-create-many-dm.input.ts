import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRelationType } from '../user/user-relation-type.enum';

@InputType()
export class UserRelationCreateManyDmInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => UserRelationType, {nullable:true})
    type?: keyof typeof UserRelationType;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    relationUserId!: string;
}
