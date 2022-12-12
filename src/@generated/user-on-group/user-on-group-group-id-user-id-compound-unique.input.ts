import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserOnGroupGroupIdUserIdCompoundUniqueInput {

    @HideField()
    groupId!: string;

    @HideField()
    userId!: string;
}
