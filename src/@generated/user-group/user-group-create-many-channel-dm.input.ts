import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserGroupCreateManyChannelDmInput {

    @Field(() => String, {nullable:true})
    id?: string;
}
