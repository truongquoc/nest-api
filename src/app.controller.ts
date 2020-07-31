import {
  Controller,
  Get,
  UseInterceptors,
  Post,
  UploadedFile,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { google } = require('googleapis');
import fs = require('fs');
// const storage = MulterModule({
//   st
// })
// import {drive_v2} from 'googleapis';
@Controller()
export class AppController {
  private path: string;
  constructor(private readonly appService: AppService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      // storage: diskStorage({
      //   destination: './uploads',
      //   filename: (req, file, cb) => {
      //     // Generating a 32 random chars long string
      //     const randomName = Array(32)
      //       .fill(null)
      //       .map(() => Math.round(Math.random() * 16).toString(16))
      //       .join('');
      //     //Calling the callback passing the random name generated with the original extension name
      //     cb(null, `${randomName}${extname(file.originalname)}`);
      //   },
      // }),
    }),
  )
  uploadFile(@UploadedFile() file) {
    console.log(file);
    // this.metaData = {
    //   mimeType: 'image/jpeg',
    //   body: fs.createReadStream(file.path),
    // };
    this.path = file.path;

    fs.readFile('credentials.json', (err, content: any) => {
      if (err) return console.log('Error loading client secret file:', err);
      // Authorize a client with credentials, then call the Google Drive API.
      //authorize(JSON.parse(content), listFiles);
      //authorize(JSON.parse(content), listFiles);
      this.authorize(JSON.parse(content), auth => {
        this.uploadImage(auth, file.path);
      });
      // authorize(JSON.parse(content), createFolder);
      // authorize(JSON.parse(content), download);
    });
  }
  uploadImage(auth, path) {
    const drive = google.drive({ version: 'v3', auth });
    const metaData = {
      mimeType: 'image/jpeg',
      body: fs.createReadStream(path),
    };
    const fileMetadata = {
      name: 'image.jpg',
      parents: ['1Fz4i97zoLQYPvmKKZG27F07HIOX1mIrr'],
    };

    drive.files.create(
      {
        resource: fileMetadata,
        media: metaData,
        fields: 'id',
      },
      function(err, res) {
        if (err) {
          // Handle error
          console.log(err);
        } else {
          console.log('File Id: ', res);
        }
      },
    );
  }
  authorize(credentials: any, callback: any) {
    const TOKEN_PATH = 'token.json';
    // eslint-disable-next-line @typescript-eslint/camelcase
    const { client_secret, client_id, redirect_uris } = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(
      client_id,
      client_secret,
      // eslint-disable-next-line @typescript-eslint/camelcase
      redirect_uris[0],
    );

    // Check if we have previously stored a token.
    fs.readFile(TOKEN_PATH, (err, token: any) => {
      if (err) {
        throw new HttpException(
          {
            message: 'Internal Server Error',
            status: HttpStatus.BAD_REQUEST,
          },
          HttpStatus.BAD_REQUEST,
        );
      }
      oAuth2Client.setCredentials(JSON.parse(token));
      callback(oAuth2Client); //list files and upload file
      //callback(oAuth2Client, '0B79LZPgLDaqESF9HV2V3YzYySkE');//get file
    });
  }
}
