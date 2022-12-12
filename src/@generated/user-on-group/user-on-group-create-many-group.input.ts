import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserOnGroupCreateManyGroupInput {

    @Field(() => Boolean, {nullable:true})
    owner?: boolean;

    @HideField()
    userId!: string;
}
