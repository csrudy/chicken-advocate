
CREATE TABLE
IF NOT EXISTS "restaurants"
(
	"_id" serial NOT NULL,
	"name" varchar
(100) NOT NULL,
	"longitude" float4 NOT NULL,
	"latitude" float4 NOT NULL,
	"price" varchar,
	"address1" varchar NOT NULL,
	"address2" varchar,
	"city" varchar NOT NULL,
	"zip_code" int NOT NULL,
	"country" varchar NOT NULL,
	"state" varchar
(2) NOT NULL,
  "image_url" varchar,
	CONSTRAINT restaurants_pk PRIMARY KEY
("_id")
)
WITH
(
  OIDS=FALSE
);



CREATE TABLE
IF NOT EXISTS "ratings"
(
	"_id" serial NOT NULL,
	"restaurant_id" int NOT NULL,
	"crunch" int NOT NULL,
	"spice" int NOT NULL,
	"flavor" int NOT NULL,
	"temp" int NOT NULL,
	"size" int NOT NULL,
	CONSTRAINT ratings_pk PRIMARY KEY
("_id")
)
WITH
(
  OIDS=FALSE
);




ALTER TABLE "ratings" ADD CONSTRAINT "ratings_fk0" FOREIGN KEY ("restaurant_id") REFERENCES "restaurants"("_id");

INSERT into ratings
	(restaurant_id, crunch, spice, flavor, temp, size)
VALUES
	(73, 8, 6, 8, 10, 9);
SELECT name
FROM restaurants INNER JOIN ratings ON restaurants._id = ratings.restaurant_id
where crunch > 7;
SELECT AVG(crunch) as crunchiness_Factor, AVG(spice) as SPICE_FACTOR
FROM ratings
WHERE restaurant_id = '79';

SELECT restaurant_id as resturant, (AVG(crunch) + AVG(spice) + avg(flavor) +  avg(temp) + avg(size))/5.0 as overall_rating
FROM ratings
group by restaurant_id
order by overall_rating desc;


select count (distinct restaurant_id)
from ratings;

SELECT name, (AVG(crunch) + AVG(spice) + avg(flavor) +  avg(temp) + avg(size))/5.0 as overall_rating
FROM ratings INNER JOIN restaurants ON restaurants._id=ratings.restaurant_id
group by name
order by overall_rating desc
;