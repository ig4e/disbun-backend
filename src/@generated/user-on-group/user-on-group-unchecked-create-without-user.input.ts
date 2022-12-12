import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserOnGroupUncheckedCreateWithoutUserInput {

    @Field(() => Boolean, {nullable:true})
    owner?: boolean;

    @HideField()
    groupId!: string;
}
