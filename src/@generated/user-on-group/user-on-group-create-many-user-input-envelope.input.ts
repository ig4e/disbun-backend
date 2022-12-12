import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserOnGroupCreateManyUserInput } from './user-on-group-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class UserOnGroupCreateManyUserInputEnvelope {

    @Field(() => [UserOnGroupCreateManyUserInput], {nullable:false})
    @Type(() => UserOnGroupCreateManyUserInput)
    data!: Array<UserOnGroupCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
