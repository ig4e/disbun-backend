import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRelationCreateManyDmInput } from './user-relation-create-many-dm.input';
import { Type } from 'class-transformer';

@InputType()
export class UserRelationCreateManyDmInputEnvelope {

    @Field(() => [UserRelationCreateManyDmInput], {nullable:false})
    @Type(() => UserRelationCreateManyDmInput)
    data!: Array<UserRelationCreateManyDmInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
