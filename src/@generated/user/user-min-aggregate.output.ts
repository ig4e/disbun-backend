import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { UserLocale } from '../prisma/user-locale.enum';

@ObjectType()
export class UserMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    username?: string;

    @Field(() => String, {nullable:true})
    discriminator?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @HideField()
    password?: string;

    @Field(() => Boolean, {nullable:true})
    verified?: boolean;

    @Field(() => Boolean, {nullable:true})
    staff?: boolean;

    @Field(() => UserLocale, {nullable:true})
    locale?: keyof typeof UserLocale;

    @Field(() => Date, {nullable:true})
    dateOfBirth?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
