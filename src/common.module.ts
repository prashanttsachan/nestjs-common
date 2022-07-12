import { Module } from '@nestjs/common';
import { CommonController } from './common.controller';
import { CommonService } from './common.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { validate } from './env.validation';
import { User } from './entities/user.entity';

@Module({
	imports: [
		ConfigModule.forRoot({ 
			envFilePath: `${process.env.NODE_ENV}.env`,
			validate,
		}), 
		TypeOrmModule.forRoot({
			type: 'mysql',
			... configuration().database,
			entities: [User],
			synchronize: true,
	})],
	controllers: [CommonController],
	providers: [CommonService],
})
export class CommonModule {}
