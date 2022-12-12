import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class DmChannelCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @HideField()
    userRelationRelatedUserId!: string;

    @HideField()
    userRelationUserId!: string;
}
