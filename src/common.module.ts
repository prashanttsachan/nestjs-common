import { Module } from '@nestjs/common';
import { CommonController } from './common.controller';
import { CommonService } from './common.service';
import { ConfigModule } from '@nestjs/config';
import { validate } from './env.validation';

@Module({
	imports: [
		ConfigModule.forRoot({ 
			envFilePath: `${process.env.NODE_ENV}.env`,
			validate,
		})],
	controllers: [CommonController],
	providers: [CommonService],
})
export class CommonModule {}
