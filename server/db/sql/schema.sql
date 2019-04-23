
  CREATE TABLE IF NOT EXISTS "restaurants" (
	"_id" serial NOT NULL,
	"name" varchar(100) NOT NULL,
	"longitude" float4 NOT NULL,
	"latitude" float4 NOT NULL,
	"price" varchar,
	"address1" varchar NOT NULL,
	"address2" varchar,
	"city" varchar NOT NULL,
	"zip_code" int NOT NULL,
	"country" varchar NOT NULL,
	"state" varchar(2) NOT NULL,
  "image_url" varchar,
	CONSTRAINT restaurants_pk PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE IF NOT EXISTS "ratings" (
	"_id" serial NOT NULL,
	"restaurant_id" serial NOT NULL,
	"crunch" int NOT NULL,
	"spice" int NOT NULL,
	"flavor" int NOT NULL,
	"temp" int NOT NULL,
	"size" int NOT NULL,
	CONSTRAINT ratings_pk PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "ratings" ADD CONSTRAINT "ratings_fk0" FOREIGN KEY ("restaurant_id") REFERENCES "restaurants"("_id");