import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserOnGroupGroupIdUserIdCompoundUniqueInput } from './user-on-group-group-id-user-id-compound-unique.input';

@InputType()
export class UserOnGroupWhereUniqueInput {

    @Field(() => UserOnGroupGroupIdUserIdCompoundUniqueInput, {nullable:true})
    groupId_userId?: UserOnGroupGroupIdUserIdCompoundUniqueInput;
}
