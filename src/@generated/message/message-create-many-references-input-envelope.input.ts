import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateManyReferencesInput } from './message-create-many-references.input';
import { Type } from 'class-transformer';

@InputType()
export class MessageCreateManyReferencesInputEnvelope {

    @Field(() => [MessageCreateManyReferencesInput], {nullable:false})
    @Type(() => MessageCreateManyReferencesInput)
    data!: Array<MessageCreateManyReferencesInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
