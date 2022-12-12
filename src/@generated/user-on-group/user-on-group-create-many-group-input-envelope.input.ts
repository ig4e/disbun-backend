import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserOnGroupCreateManyGroupInput } from './user-on-group-create-many-group.input';
import { Type } from 'class-transformer';

@InputType()
export class UserOnGroupCreateManyGroupInputEnvelope {

    @Field(() => [UserOnGroupCreateManyGroupInput], {nullable:false})
    @Type(() => UserOnGroupCreateManyGroupInput)
    data!: Array<UserOnGroupCreateManyGroupInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
