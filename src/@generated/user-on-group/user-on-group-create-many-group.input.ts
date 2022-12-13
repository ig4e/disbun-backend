import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserOnGroupCreateManyGroupInput {

    @Field(() => Boolean, {nullable:true})
    owner?: boolean;

    @Field(() => String, {nullable:false})
    userId!: string;
}
