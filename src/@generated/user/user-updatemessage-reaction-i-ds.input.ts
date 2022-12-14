import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserUpdatemessageReactionIDsInput {

    @Field(() => [String], {nullable:true})
    set?: Array<string>;
}
