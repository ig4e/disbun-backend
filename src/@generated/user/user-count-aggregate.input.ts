import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class UserCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    username?: true;

    @Field(() => Boolean, {nullable:true})
    discriminator?: true;

    @Field(() => Boolean, {nullable:true})
    email?: true;

    @HideField()
    password?: true;

    @Field(() => Boolean, {nullable:true})
    verified?: true;

    @Field(() => Boolean, {nullable:true})
    staff?: true;

    @Field(() => Boolean, {nullable:true})
    locale?: true;

    @Field(() => Boolean, {nullable:true})
    dateOfBirth?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    messageReactionIDs?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
