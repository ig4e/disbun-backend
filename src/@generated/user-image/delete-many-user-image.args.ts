import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserImageWhereInput } from './user-image-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyUserImageArgs {

    @Field(() => UserImageWhereInput, {nullable:true})
    @Type(() => UserImageWhereInput)
    where?: UserImageWhereInput;
}
