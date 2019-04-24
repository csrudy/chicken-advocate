import Pool from "../db/dbconnect";
import { QueryResult } from "pg";

interface IDbReader<T> {
  Get: (f: ISearchFilter) => Promise<T>;
  GetTopTen: () => Promise<T>;
}

export interface ISearchFilter {
  offset?: string;
  zip_code?: string;
  name?: string;
  count?: string;
}

export const dbReader: IDbReader<QueryResult> = {
  Get: (filters?: ISearchFilter) => {
    return new Promise((resolve, reject) => {
      if (Object.values(filters).every(val => !val)) {
        // Pool.query("SELECT * from restaurants LIMIT 10")
        Pool.query(
          "SELECT * FROM restaurants where name not like 'KFC' and name not like 'Pizza Hut' and name not like 'Church%' and name not like 'Wing%' and name not like 'Domino%' and name not like 'Popeyes%' and name not like 'Vons%' and name not like '%Pizza%' limit 100;"
        )
          .then(result => {
            resolve(result);
          })
          .catch(err => reject(err));
      } else {
        const { offset, zip_code, name, count } = filters;
        const whereFilter = { zip_code, name };
        const whereArr = [];

        Object.entries(whereFilter).forEach(kv => {
          whereArr.push(kv.join(" = "));
        });

        const filterString = whereArr.join(" AND ");
        const baseQueryString = "SELECT * from restaurants ";
        let modifiedQueryString = baseQueryString;

        if (whereArr.length) {
          modifiedQueryString += `WHERE ${filterString} `;
        }

        if (count) {
          modifiedQueryString += `LIMIT ${count}`;
        }

        if (offset) {
          modifiedQueryString += `OFFSET ${offset}`;
        }

        Pool.query(modifiedQueryString)
          .then(result => {
            resolve(result);
          })
          .catch(err => reject(err));
      }
    });
  },
  GetTopTen: () => {
    return new Promise((resolve, reject) => {
      const queryString =
        "SELECT name, AVG(spice) as avg_spice, AVG(crunch) as avg_spice, AVG(flavor) as avg_flavor, AVG(temp) as avg_temp, AVG(size) as avg_size, (AVG(crunch) + AVG(spice) + avg(flavor) +  avg(temp) + avg(size))/5.0 as overall_avg FROM ratings INNER JOIN restaurants ON restaurants._id=ratings.restaurant_id group by name order by overall_avg desc LIMIT 10;";
      Pool.query(queryString)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};
