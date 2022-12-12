import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserImageWhereUniqueInput } from './user-image-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneUserImageArgs {

    @Field(() => UserImageWhereUniqueInput, {nullable:false})
    @Type(() => UserImageWhereUniqueInput)
    where!: UserImageWhereUniqueInput;
}
