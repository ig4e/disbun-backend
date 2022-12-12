import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserImageWhereUniqueInput } from './user-image-where-unique.input';
import { Type } from 'class-transformer';
import { UserImageCreateWithoutUserInput } from './user-image-create-without-user.input';

@InputType()
export class UserImageCreateOrConnectWithoutUserInput {

    @Field(() => UserImageWhereUniqueInput, {nullable:false})
    @Type(() => UserImageWhereUniqueInput)
    where!: UserImageWhereUniqueInput;

    @Field(() => UserImageCreateWithoutUserInput, {nullable:false})
    @Type(() => UserImageCreateWithoutUserInput)
    create!: UserImageCreateWithoutUserInput;
}
