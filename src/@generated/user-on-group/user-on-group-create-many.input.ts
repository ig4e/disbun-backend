import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserOnGroupCreateManyInput {

    @Field(() => Boolean, {nullable:true})
    owner?: boolean;

    @HideField()
    groupId!: string;

    @HideField()
    userId!: string;
}
