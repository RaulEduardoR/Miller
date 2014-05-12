	var db = null;
	var dbname = "millerdb_1.0";
	var dbversion = '1.1';
	var dbdisplayName = 'Shake_db';
	
	function Iniciarapp(){
		db = openDatabase(dbname, dbversion, dbdisplayName, 50 * 1024);
		if (db) {					
			db.transaction(function (tx) {
				// If table not exsist create it
				tx.executeSql("CREATE TABLE IF NOT EXISTS EQUIPO		 	(id_equipo INTEGER PRIMARY KEY AUTOINCREMENT, nombre_equipo TEXT, imagenB TEXT, imagenM TEXT, imagenC TEXT,deporte TEXT)");
				tx.executeSql("CREATE TABLE IF NOT EXISTS RANDOM		    (id_random INTEGER PRIMARY KEY AUTOINCREMENT, id_equipo int)");
				tx.executeSql("CREATE TABLE IF NOT EXISTS RANDOMDROP 		(id_random INTEGER PRIMARY KEY AUTOINCREMENT, id_equipo INT, nombre TEXT)");
				tx.executeSql("SELECT * FROM EQUIPO", [], function (tx, results)
				{
					var valor = '';
					var longitud = results.rows.length;
					if (longitud > 0) {
						valor =  1;
					}else{
						valor =  0;
						/* -====== INSERTS NFL ======- */
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["WASHINGTON REDSKINS","images/logosQuiz/nfl/nfl1b.png","images/logosQuiz/nfl/nfl1m.png","images/logosQuiz/nfl/nfl1c.png","NFL"]); 
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["CHICAGO BEARS","images/logosQuiz/nfl/nfl2b.png","images/logosQuiz/nfl/nfl2m.png","images/logosQuiz/nfl/nfl2c.png","NFL"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["NEW YORK JETS","images/logosQuiz/nfl/nfl3b.png","images/logosQuiz/nfl/nfl3m.png","images/logosQuiz/nfl/nfl3c.png","NFL"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["NEW YORK GIANTS","images/logosQuiz/nfl/nfl4b.png","images/logosQuiz/nfl/nfl4m.png","images/logosQuiz/nfl/nfl4c.png","NFL"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["ATLANTA FALCONS","images/logosQuiz/nfl/nfl5b.png","images/logosQuiz/nfl/nfl5m.png","images/logosQuiz/nfl/nfl5c.png","NFL"]);
						
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["CAROLINA PANTHERS","images/logosQuiz/nfl/nfl6b.png","images/logosQuiz/nfl/nfl6m.png","images/logosQuiz/nfl/nfl6c.png","NFL"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["ST. LOUIS RAMS","images/logosQuiz/nfl/nfl7b.png","images/logosQuiz/nfl/nfl7m.png","images/logosQuiz/nfl/nfl7c.png","NFL"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["OAKLAND RAIDERS","images/logosQuiz/nfl/nfl8b.png","images/logosQuiz/nfl/nfl8m.png","images/logosQuiz/nfl/nfl8c.png","NFL"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["MINNESOTA VIKINGS","images/logosQuiz/nfl/nfl9b.png","images/logosQuiz/nfl/nfl9m.png","images/logosQuiz/nfl/nfl9c.png","NFL"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["ARIZONA CARDINALS","images/logosQuiz/nfl/nfl10b.png","images/logosQuiz/nfl/nfl10m.png","images/logosQuiz/nfl/nfl10c.png","NFL"]);
						
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["BALTIMORE RAVENS","images/logosQuiz/nfl/nfl11b.png","images/logosQuiz/nfl/nfl11m.png","images/logosQuiz/nfl/nfl11c.png","NFL"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["CINCINNATI BENGALS","images/logosQuiz/nfl/nfl12b.png","images/logosQuiz/nfl/nfl12m.png","images/logosQuiz/nfl/nfl12c.png","NFL"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["BUFFALO BILLS","images/logosQuiz/nfl/nfl13b.png","images/logosQuiz/nfl/nfl13m.png","images/logosQuiz/nfl/nfl13c.png","NFL"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["DETROIT LIONS","images/logosQuiz/nfl/nfl14b.png","images/logosQuiz/nfl/nfl14m.png","images/logosQuiz/nfl/nfl14c.png","NFL"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["DENVER BRONCOS","images/logosQuiz/nfl/nfl15b.png","images/logosQuiz/nfl/nfl15m.png","images/logosQuiz/nfl/nfl15c.png","NFL"]);
						
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["PHILADELPHIA EAGLES","images/logosQuiz/nfl/nfl16b.png","images/logosQuiz/nfl/nfl16m.png","images/logosQuiz/nfl/nfl16c.png","NFL"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["CLEVELAND BROWNS","images/logosQuiz/nfl/nfl17b.png","images/logosQuiz/nfl/nfl17m.png","images/logosQuiz/nfl/nfl17c.png","NFL"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["INDIANAPOLIS COLTS","images/logosQuiz/nfl/nfl18b.png","images/logosQuiz/nfl/nfl18m.png","images/logosQuiz/nfl/nfl18c.png","NFL"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["GREEN BAY PACKERS","images/logosQuiz/nfl/nfl19b.png","images/logosQuiz/nfl/nfl19m.png","images/logosQuiz/nfl/nfl19c.png","NFL"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["MIAMI DOLPHINS","images/logosQuiz/nfl/nfl20b.png","images/logosQuiz/nfl/nfl20m.png","images/logosQuiz/nfl/nfl20c.png","NFL"]);
						
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["KANSAS CITY CHIEFS","images/logosQuiz/nfl/nfl21b.png","images/logosQuiz/nfl/nfl21m.png","images/logosQuiz/nfl/nfl21c.png","NFL"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["NEW ENGLAND PATRIOTS","images/logosQuiz/nfl/nfl22b.png","images/logosQuiz/nfl/nfl22m.png","images/logosQuiz/nfl/nfl22c.png","NFL"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["HOUSTON TEXANS","images/logosQuiz/nfl/nfl23b.png","images/logosQuiz/nfl/nfl23m.png","images/logosQuiz/nfl/nfl23c.png","NFL"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["JACKSONVILLE JAGUARS","images/logosQuiz/nfl/nfl24b.png","images/logosQuiz/nfl/nfl24m.png","images/logosQuiz/nfl/nfl24c.png","NFL"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["SEATTLE SEAHAWKS","images/logosQuiz/nfl/nfl25b.png","images/logosQuiz/nfl/nfl25m.png","images/logosQuiz/nfl/nfl25c.png","NFL"]);
						
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["DALLAS COWBOYS","images/logosQuiz/nfl/nfl26b.png","images/logosQuiz/nfl/nfl26m.png","images/logosQuiz/nfl/nfl26c.png","NFL"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["SAN DIEGO CHARGERS","images/logosQuiz/nfl/nfl27b.png","images/logosQuiz/nfl/nfl27m.png","images/logosQuiz/nfl/nfl27c.png","NFL"]);						
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["SAN FRANCISCO 49ers","images/logosQuiz/nfl/nfl28b.png","images/logosQuiz/nfl/nfl28m.png","images/logosQuiz/nfl/nfl28c.png","NFL"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["PITTSBURGH STEELERS","images/logosQuiz/nfl/nfl29b.png","images/logosQuiz/nfl/nfl29m.png","images/logosQuiz/nfl/nfl29c.png","NFL"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["NEW ORLEANS SAINTS","images/logosQuiz/nfl/nfl30b.png","images/logosQuiz/nfl/nfl30m.png","images/logosQuiz/nfl/nfl30c.png","NFL"]);
						
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["TAMPA BAY BUCCANEERS","images/logosQuiz/nfl/nfl31b.png","images/logosQuiz/nfl/nfl31m.png","images/logosQuiz/nfl/nfl31c.png","NFL"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["TENNESSEE TITANS","images/logosQuiz/nfl/nfl32b.png","images/logosQuiz/nfl/nfl32m.png","images/logosQuiz/nfl/nfl32c.png","NFL"]);
						
						/* -====== INSERTS NBA ======- */
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["BOSTON CELTICS","images/logosQuiz/nba/nba1b.png","images/logosQuiz/nba/nba1m.png","images/logosQuiz/nba/nba1c.png","NBA"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["BROOKLYN NETS","images/logosQuiz/nba/nba2b.png","images/logosQuiz/nba/nba2m.png","images/logosQuiz/nba/nba2c.png","NBA"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["NEW YORK KNICKS","images/logosQuiz/nba/nba3b.png","images/logosQuiz/nba/nba3m.png","images/logosQuiz/nba/nba3c.png","NBA"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["PHILADELPHIA 76ERS","images/logosQuiz/nba/nba4b.png","images/logosQuiz/nba/nba4m.png","images/logosQuiz/nba/nba4c.png","NBA"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["TORONTO RAPTORS","images/logosQuiz/nba/nba5b.png","images/logosQuiz/nba/nba5m.png","images/logosQuiz/nba/nba5c.png","NBA"]);

						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["CHICAGO BULLS","images/logosQuiz/nba/nba6b.png","images/logosQuiz/nba/nba6m.png","images/logosQuiz/nba/nba6c.png","NBA"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["INDIANA PACERS","images/logosQuiz/nba/nba7b.png","images/logosQuiz/nba/nba7m.png","images/logosQuiz/nba/nba7c.png","NBA"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["DETROIT PISTONS","images/logosQuiz/nba/nba8b.png","images/logosQuiz/nba/nba8m.png","images/logosQuiz/nba/nba8c.png","NBA"]);						
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["MILWAUKEE BUCKS","images/logosQuiz/nba/nba9b.png","images/logosQuiz/nba/nba9m.png","images/logosQuiz/nba/nba9c.png","NBA"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["CLEVELAND CAVALIERS","images/logosQuiz/nba/nba10b.png","images/logosQuiz/nba/nba10m.png","images/logosQuiz/nba/nba10c.png","NBA"]);
						
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["ATLANTA HAWKS","images/logosQuiz/nba/nba11b.png","images/logosQuiz/nba/nba11m.png","images/logosQuiz/nba/nba11c.png","NBA"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["OKLAHOMA CITY THUNDER","images/logosQuiz/nba/nba12b.png","images/logosQuiz/nba/nba12m.png","images/logosQuiz/nba/nba12c.png","NBA"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["MIAMI HEAT","images/logosQuiz/nba/nba13b.png","images/logosQuiz/nba/nba13m.png","images/logosQuiz/nba/nba13c.png","NBA"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["ORLANDO MAGIC","images/logosQuiz/nba/nba14b.png","images/logosQuiz/nba/nba14m.png","images/logosQuiz/nba/nba14c.png","NBA"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["WASHINGTON WIZARDS","images/logosQuiz/nba/nba15b.png","images/logosQuiz/nba/nba15m.png","images/logosQuiz/nba/nba15c.png","NBA"]);
						
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["CHARLOTTE BOBCATS","images/logosQuiz/nba/nba16b.png","images/logosQuiz/nba/nba16m.png","images/logosQuiz/nba/nba16c.png","NBA"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["PORTLAND TRAIL BLAZERS","images/logosQuiz/nba/nba17b.png","images/logosQuiz/nba/nba17m.png","images/logosQuiz/nba/nba17c.png","NBA"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["MEMPHIS GRIZZLIES","images/logosQuiz/nba/nba18b.png","images/logosQuiz/nba/nba18m.png","images/logosQuiz/nba/nba18c.png","NBA"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["NEW ORLEANS HORNETS","images/logosQuiz/nba/nba19b.png","images/logosQuiz/nba/nba19m.png","images/logosQuiz/nba/nba19c.png","NBA"]);												
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["MINNESOTA TIMBERWOLVES","images/logosQuiz/nba/nba20b.png","images/logosQuiz/nba/nba20m.png","images/logosQuiz/nba/nba20c.png","NBA"]);
						
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["DALLAS MAVERICKS","images/logosQuiz/nba/nba21b.png","images/logosQuiz/nba/nba21m.png","images/logosQuiz/nba/nba21c.png","NBA"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["DENVER NUGGETS","images/logosQuiz/nba/nba22b.png","images/logosQuiz/nba/nba22m.png","images/logosQuiz/nba/nba22c.png","NBA"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["HOUSTON ROCKETS","images/logosQuiz/nba/nba23b.png","images/logosQuiz/nba/nba23m.png","images/logosQuiz/nba/nba23c.png","NBA"]);						
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["UTAH JAZZ","images/logosQuiz/nba/nba24b.png","images/logosQuiz/nba/nba24m.png","images/logosQuiz/nba/nba24c.png","NBA"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["SAN ANTONIO SPURS","images/logosQuiz/nba/nba25b.png","images/logosQuiz/nba/nba25m.png","images/logosQuiz/nba/nba25c.png","NBA"]);
						
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["SACRAMENTO KINGS","images/logosQuiz/nba/nba26b.png","images/logosQuiz/nba/nba26m.png","images/logosQuiz/nba/nba26c.png","NBA"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["LOS ANGELES CLIPPERS","images/logosQuiz/nba/nba27b.png","images/logosQuiz/nba/nba27m.png","images/logosQuiz/nba/nba27c.png","NBA"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["GOLDEN STATE WARRIORS","images/logosQuiz/nba/nba28b.png","images/logosQuiz/nba/nba28m.png","images/logosQuiz/nba/nba28c.png","NBA"]);						
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["LOS ANGELES LAKERS","images/logosQuiz/nba/nba29b.png","images/logosQuiz/nba/nba29m.png","images/logosQuiz/nba/nba29c.png","NBA"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["PHOENIX SUNS","images/logosQuiz/nba/nba30b.png","images/logosQuiz/nba/nba30m.png","images/logosQuiz/nba/nba30c.png","NBA"]);
						
						/* -====== INSERTS MLB ======- */
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["ARIZONA DIAMONDBACKS","images/logosQuiz/mlb/mlb1b.png","images/logosQuiz/mlb/mlb1m.png","images/logosQuiz/mlb/mlb1c.png","MLB"]);	
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["ATLANTA BRAVES","images/logosQuiz/mlb/mlb2b.png","images/logosQuiz/mlb/mlb2m.png","images/logosQuiz/mlb/mlb2c.png","MLB"]);	
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["BALTIMORE ORIOLES","images/logosQuiz/mlb/mlb3b.png","images/logosQuiz/mlb/mlb3m.png","images/logosQuiz/mlb/mlb3c.png","MLB"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["BOSTON RED SOX","images/logosQuiz/mlb/mlb4b.png","images/logosQuiz/mlb/mlb4m.png","images/logosQuiz/mlb/mlb4c.png","MLB"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["MIAMI MARLINS","images/logosQuiz/mlb/mlb5b.png","images/logosQuiz/mlb/mlb5m.png","images/logosQuiz/mlb/mlb5c.png","MLB"]);
						
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["MILWAUKEE BREWERS","images/logosQuiz/mlb/mlb6b.png","images/logosQuiz/mlb/mlb6m.png","images/logosQuiz/mlb/mlb6c.png","MLB"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["NEW YORK METS","images/logosQuiz/mlb/mlb7b.png","images/logosQuiz/mlb/mlb7m.png","images/logosQuiz/mlb/mlb7c.png","MLB"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["CHICAGO CUBS","images/logosQuiz/mlb/mlb8b.png","images/logosQuiz/mlb/mlb8m.png","images/logosQuiz/mlb/mlb8c.png","MLB"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["CHICAGO WHITE SOX","images/logosQuiz/mlb/mlb9b.png","images/logosQuiz/mlb/mlb9m.png","images/logosQuiz/mlb/mlb9c.png","MLB"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["CINCINNATI REDS","images/logosQuiz/mlb/mlb10b.png","images/logosQuiz/mlb/mlb10m.png","images/logosQuiz/mlb/mlb10c.png","MLB"]);
						
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["CLEVELAND INDIANS","images/logosQuiz/mlb/mlb11b.png","images/logosQuiz/mlb/mlb11m.png","images/logosQuiz/mlb/mlb11c.png","MLB"]);						
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["NEW YORK YANKEES","images/logosQuiz/mlb/mlb12b.png","images/logosQuiz/mlb/mlb12m.png","images/logosQuiz/mlb/mlb12c.png","MLB"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["PHILADELPHIA PHILIES","images/logosQuiz/mlb/mlb13b.png","images/logosQuiz/mlb/mlb13m.png","images/logosQuiz/mlb/mlb13c.png","MLB"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["PITTSBURGH PIRATES","images/logosQuiz/mlb/mlb14b.png","images/logosQuiz/mlb/mlb14m.png","images/logosQuiz/mlb/mlb14c.png","MLB"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["COLORADO ROCKIES","images/logosQuiz/mlb/mlb15b.png","images/logosQuiz/mlb/mlb15m.png","images/logosQuiz/mlb/mlb15c.png","MLB"]);
						
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["DETROIT TIGERS","images/logosQuiz/mlb/mlb16b.png","images/logosQuiz/mlb/mlb16m.png","images/logosQuiz/mlb/mlb16c.png","MLB"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["HOUSTON ASTROS","images/logosQuiz/mlb/mlb17b.png","images/logosQuiz/mlb/mlb17m.png","images/logosQuiz/mlb/mlb17c.png","MLB"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["KANSAS CITY ROYALS","images/logosQuiz/mlb/mlb18b.png","images/logosQuiz/mlb/mlb18m.png","images/logosQuiz/mlb/mlb18c.png","MLB"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["SAN DIEGO PADRES","images/logosQuiz/mlb/mlb19b.png","images/logosQuiz/mlb/mlb19m.png","images/logosQuiz/mlb/mlb19c.png","MLB"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["SAN FRANCISCO GIANTS","images/logosQuiz/mlb/mlb20b.png","images/logosQuiz/mlb/mlb20m.png","images/logosQuiz/mlb/mlb20c.png","MLB"]);
						
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["ST. LOUIS CARDINALS","images/logosQuiz/mlb/mlb21b.png","images/logosQuiz/mlb/mlb21m.png","images/logosQuiz/mlb/mlb21c.png","MLB"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["LOS ANGELES ANGELS","images/logosQuiz/mlb/mlb22b.png","images/logosQuiz/mlb/mlb22m.png","images/logosQuiz/mlb/mlb22c.png","MLB"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["LOS ANGELES DODGERS","images/logosQuiz/mlb/mlb23b.png","images/logosQuiz/mlb/mlb23m.png","images/logosQuiz/mlb/mlb23c.png","MLB"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["MINNESOTA TWINS","images/logosQuiz/mlb/mlb24b.png","images/logosQuiz/mlb/mlb24m.png","images/logosQuiz/mlb/mlb24c.png","MLB"]);					
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["OAKLAND ATHLETICS","images/logosQuiz/mlb/mlb25b.png","images/logosQuiz/mlb/mlb25m.png","images/logosQuiz/mlb/mlb25c.png","MLB"]);
						
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["SEATTLE MARINERS","images/logosQuiz/mlb/mlb26b.png","images/logosQuiz/mlb/mlb26m.png","images/logosQuiz/mlb/mlb26c.png","MLB"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["TAMPA BAY RAYS","images/logosQuiz/mlb/mlb27b.png","images/logosQuiz/mlb/mlb27m.png","images/logosQuiz/mlb/mlb27c.png","MLB"]);
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["TEXAS RANGERS","images/logosQuiz/mlb/mlb28b.png","images/logosQuiz/mlb/mlb28m.png","images/logosQuiz/mlb/mlb28c.png","MLB"]);						
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["TORONTO BLUE JAYS","images/logosQuiz/mlb/mlb29b.png","images/logosQuiz/mlb/mlb29m.png","images/logosQuiz/mlb/mlb29c.png","MLB"]);						
						tx.executeSql("INSERT INTO EQUIPO (nombre_equipo,imagenB,imagenM,imagenC,deporte) VALUES (?,?,?,?,?)", ["WASHINGTON NATIONALS","images/logosQuiz/mlb/mlb30b.png","images/logosQuiz/mlb/mlb30m.png","images/logosQuiz/mlb/mlb30c.png","MLB"]);
					}
				});
				
				tx.executeSql("CREATE TABLE IF NOT EXISTS EQUIPOB		 	(id_equipo INTEGER PRIMARY KEY AUTOINCREMENT, nombre_equipo TEXT, imagen TEXT, descripcion TEXT)");
				tx.executeSql("CREATE TABLE IF NOT EXISTS TEMPORAL			(id_temp INTEGER PRIMARY KEY AUTOINCREMENT, temp INT)");
				tx.executeSql("CREATE TABLE IF NOT EXISTS RANDOMDROPB 		(id_random INTEGER PRIMARY KEY AUTOINCREMENT, id_equipo INT, nombre TEXT)");	
				tx.executeSql("SELECT * FROM EQUIPOB", [], function (ax, results)
				{
					var longitud = results.rows.length;
					if(longitud > 0 ){

					}else{
						/* -====== INSERTS NFL ======- */
						tx.executeSql("INSERT INTO EQUIPOB (nombre_equipo,imagen,descripcion) VALUES (?,?,?)", ["DALLAS COWBOYS","images/superBowl/imagen1.png","Ha sido uno de los equipos mas exitosos de la era moderna de este deporte con cinco victorias en Super Bowl y ocho campeonatos de su conferencia."]);
						tx.executeSql("INSERT INTO EQUIPOB (nombre_equipo,imagen,descripcion) VALUES (?,?,?)", ["NEW YORK GIANTS","images/superBowl/imagen2.png","La central del equipo, sus entrenamientos, y los partidos son jugados por este equipo en el MetLife Stadium, su nuevo estadio inaugurado en 2010."]);
						tx.executeSql("INSERT INTO EQUIPOB (nombre_equipo,imagen,descripcion) VALUES (?,?,?)", ["PHILADELPHIA EAGLES","images/superBowl/imagen3.png","Antes, durante mas de tres decadas, su sede fue el Veterans Stadium."]);
						tx.executeSql("INSERT INTO EQUIPOB (nombre_equipo,imagen,descripcion) VALUES (?,?,?)", ["WASHINGTON REDSKINS","images/superBowl/imagen4.png","Son la segunda franquicia mas valiosa en la NFL, valuada en aproximadamente en $1.538 millardos de dolares."]);
						tx.executeSql("INSERT INTO EQUIPOB (nombre_equipo,imagen,descripcion) VALUES (?,?,?)", ["ARIZONA CARDINALS","images/superBowl/imagen5.png","Esta es la unica franquicia actual de los clubes fundadores de la NFL la que fue fundada en 1919."]);
						tx.executeSql("INSERT INTO EQUIPOB (nombre_equipo,imagen,descripcion) VALUES (?,?,?)", ["SAN FRANCISCO 49ers","images/superBowl/imagen6.png","Durante los 80 y principios de los 90 formo una gran dinastia que le otorgo 5 triunfos en la Superbowl, cuatro de ellos duarante los 80."]);
						tx.executeSql("INSERT INTO EQUIPOB (nombre_equipo,imagen,descripcion) VALUES (?,?,?)", ["SEATTLE SEAHAWKS","images/superBowl/imagen7.png","Es actualmente el unico equipo que ha jugado partidos oficiales en la NFC y en la AFC."]);
						tx.executeSql("INSERT INTO EQUIPOB (nombre_equipo,imagen,descripcion) VALUES (?,?,?)", ["ST. LOUIS RAMS","images/superBowl/imagen8.png","Originalmente en la ciudad de Cleveland, Ohio y posteriormente se mudaron a Los Angeles. Finalmente en 1995 la franquicia se traslado a la ciudad actual de San Luis, Misuri."]); 

						tx.executeSql("INSERT INTO EQUIPOB (nombre_equipo,imagen,descripcion) VALUES (?,?,?)", ["CHICAGO BEARS","images/superBowl/imagen9.png","Es uno de los equipos mas antiguos de la liga, fundado en 1919 como los Decatur Staleys."]);
						tx.executeSql("INSERT INTO EQUIPOB (nombre_equipo,imagen,descripcion) VALUES (?,?,?)", ["DETROIT LIONS","images/superBowl/imagen10.png","Son uno de los 4 equipos que actualmente juegan en la NFL y que nunca han jugado la Super Bowl."]);
						tx.executeSql("INSERT INTO EQUIPOB (nombre_equipo,imagen,descripcion) VALUES (?,?,?)", ["GREEN BAY PACKERS","images/superBowl/imagen11.png","Han ganado 13 campeonatos de la liga (mas que cualquier otro equipo), incluyendo 9 Campeonatos de la NFL, competicion previa a la actual SuperBowl, y cuatro Super Bowls."]);
						tx.executeSql("INSERT INTO EQUIPOB (nombre_equipo,imagen,descripcion) VALUES (?,?,?)", ["MINNESOTA VIKINGS","images/superBowl/imagen12.png","Tambien llamados Vikes han sido una de las franquicias mas exitosas de la NFL con el segundo porcentaje de victorias."]);
						tx.executeSql("INSERT INTO EQUIPOB (nombre_equipo,imagen,descripcion) VALUES (?,?,?)", ["ATLANTA FALCONS","images/superBowl/imagen13.png","Su mejor temporada fue en 1998 con marca de 14-2 para luego vencer en un epico partido a los Minnesota Vikings en la final de la NFC."]);
						tx.executeSql("INSERT INTO EQUIPOB (nombre_equipo,imagen,descripcion) VALUES (?,?,?)", ["CAROLINA PANTHERS","images/superBowl/imagen14.png","El 26 de octubre de 1993, los duenos de la liga los seleccionaron unanimemente como la licencia numero 29 de la NFL."]);
						tx.executeSql("INSERT INTO EQUIPOB (nombre_equipo,imagen,descripcion) VALUES (?,?,?)", ["NEW ORLEANS SAINTS","images/superBowl/imagen15.png","El momento mas vergonzoso de su historia, sucedio a principios del Siglo XXI cuando Ricky Williams aparecio en la portada de ESPN Magazine con un vestido de novia puesto junto con el coach Mike Ditka que llevaba un smoquin puesto."]);
						tx.executeSql("INSERT INTO EQUIPOB (nombre_equipo,imagen,descripcion) VALUES (?,?,?)", ["TAMPA BAY BUCCANEERS","images/superBowl/imagen16.png","Ganaron el Super Bowl XXXVII al final de la temporada del 2002."]); 

						tx.executeSql("INSERT INTO EQUIPOB (nombre_equipo,imagen,descripcion) VALUES (?,?,?)", ["BUFFALO BILLS","images/superBowl/imagen17.png","En los 90, se convirtieron en el unico equipo en llegar a cuatro Super Bowls consecutivos, entre 1990 y 1993, sin embargo, perdieron en todos."]);
						tx.executeSql("INSERT INTO EQUIPOB (nombre_equipo,imagen,descripcion) VALUES (?,?,?)", ["MIAMI DOLPHINS","images/superBowl/imagen18.png","En 1973, obtuvieron una Temporada Perfecta ganando los 14 partidos de temporada regular mas los 2 partidos de post-temporada y finalmente llevandose la victoria en la Super Bowl VII contra los Washington Redskins."]);
						tx.executeSql("INSERT INTO EQUIPOB (nombre_equipo,imagen,descripcion) VALUES (?,?,?)", ["NEW ENGLAND PATRIOTS","images/superBowl/imagen19.png","Se convirtieron en el segundo equipo en la historia de la NFL, tras los Dallas Cowboys, en ganar tres Super Bowls en cuatro ."]);
						tx.executeSql("INSERT INTO EQUIPOB (nombre_equipo,imagen,descripcion) VALUES (?,?,?)", ["NEW YORK JETS","images/superBowl/imagen20.png","Hasta enero de 2010 jugaron en el Giants Stadium. Desde ese agosto juegan en el nuevo estadio MetLife Stadium."]);
						tx.executeSql("INSERT INTO EQUIPOB (nombre_equipo,imagen,descripcion) VALUES (?,?,?)", ["DENVER BRONCOS","images/superBowl/imagen21.png","Su mejor epoca fue durante los  1980 y 1990, cuando ganaron sus dos Super Bowl y la mayoria de sus titulos, entonces se convirtieron en uno de los dominadores de la NFL"]);
						tx.executeSql("INSERT INTO EQUIPOB (nombre_equipo,imagen,descripcion) VALUES (?,?,?)", ["KANSAS CITY CHIEFS","images/superBowl/imagen22.png","Tuvo uno de los mejores RB de la historia de la NFL que fue Daniel Elo que tuvo 2,347 yds en una sola temporada en 1974."]);
						tx.executeSql("INSERT INTO EQUIPOB (nombre_equipo,imagen,descripcion) VALUES (?,?,?)", ["OAKLAND RAIDERS","images/superBowl/imagen23.png","En un episodio en 1992 de la serie de dibujos animados Los Simpson ('Lisa the Greek'), Lisa Simpson escoge los Raiders para ganar un juego 'porque ellos siempre hacen trampas'"]);
						tx.executeSql("INSERT INTO EQUIPOB (nombre_equipo,imagen,descripcion) VALUES (?,?,?)", ["SAN DIEGO CHARGERS","images/superBowl/imagen24.png","Ganaron un campeonato de conferencia en 1994 y tambien han ganado 12 campeonatos de division."]); 

						tx.executeSql("INSERT INTO EQUIPOB (nombre_equipo,imagen,descripcion) VALUES (?,?,?)", ["BALTIMORE RAVENS","images/superBowl/imagen25.png","Son actualmente uno de los cuatro equipos para ganar en su unica aparicion del Super Bowl, junto con los New Orleans Saints, New York Jets y Tampa Bay Buccaneers."]);
						tx.executeSql("INSERT INTO EQUIPOB (nombre_equipo,imagen,descripcion) VALUES (?,?,?)", ["CINCINNATI BENGALS","images/superBowl/imagen26.png","Juega en el Paul Brown Stadium y sus colores son el naranja, el blanco y el negro."]);
						tx.executeSql("INSERT INTO EQUIPOB (nombre_equipo,imagen,descripcion) VALUES (?,?,?)", ["CLEVELAND BROWNS","images/superBowl/imagen27.png","Conocidos en Mexico como Cafes de Cleveland, es un equipo que juega en la AFC Norte de la NFL."]);
						tx.executeSql("INSERT INTO EQUIPOB (nombre_equipo,imagen,descripcion) VALUES (?,?,?)", ["PITTSBURGH STEELERS","images/superBowl/imagen28.png","El equipo fue rebautizado como los Steelers en 1941 en honor a la industria mas importante de la ciudad (la del acero)."]);
						tx.executeSql("INSERT INTO EQUIPOB (nombre_equipo,imagen,descripcion) VALUES (?,?,?)", ["HOUSTON TEXANS","images/superBowl/imagen29.png","Es el equipo de mas reciente creacion en esta liga, ya que solo ha participado desde 2002 hasta la actualidad."]);
						tx.executeSql("INSERT INTO EQUIPOB (nombre_equipo,imagen,descripcion) VALUES (?,?,?)", ["INDIANAPOLIS COLTS","images/superBowl/imagen30.png","Tradicionalmente, sus colores son azul y blanco, de local, y como visitantes juegan totalmente de blanco."]);
						tx.executeSql("INSERT INTO EQUIPOB (nombre_equipo,imagen,descripcion) VALUES (?,?,?)", ["JACKSONVILLE JAGUARS","images/superBowl/imagen31.png","En 2008 lograron una plaza wild card, superando a los Pittsburgh Steelers y perdiendo posteriormente ante los Patriots."]);
						tx.executeSql("INSERT INTO EQUIPOB (nombre_equipo,imagen,descripcion) VALUES (?,?,?)", ["TENNESSEE TITANS","images/superBowl/imagen32.png","La franquicia fue fundada en 1960 con el nombre Houston Oilers (Petroleros de Houston). No han ganado nunca el Super Bowl."]);	
					}					
				});				
			});
		}
	}
	
	/* === FUNCTIONS LOGS QUIZ === */
	function Random(){
		var numAleatorios = [];
		db.transaction(function (tx) {
			    var max = 92;
			    var aleatorio = 0;  
			    db = openDatabase(dbname, dbversion, dbdisplayName, 50 * 1024);      
			    for (i = 0; i < 9; i++){
					do {
						aleatorio = Math.floor((Math.random()*max)+1);
					} while ($.inArray(aleatorio,numAleatorios)!="-1");
					   numAleatorios.push(aleatorio);
					   tx.executeSql("INSERT INTO RANDOM (id_equipo) VALUES (?)", [aleatorio]);				  
			    }
        });	
	}
	
	function DeleteRandom(){
		db = openDatabase(dbname, dbversion, dbdisplayName, 50 * 1024);        
		db.transaction(function (ax) {
			ax.executeSql('DROP TABLE RANDOM', []);
			ax.executeSql("CREATE TABLE IF NOT EXISTS RANDOM(id_random INTEGER PRIMARY KEY AUTOINCREMENT, id_equipo INT)");                        
		});
    }
	
	function RandomDropLogos(){
		var numAleatorios = [];
		db.transaction(function (tx) {
			var max = 92;
			var aleatorio = 0;  
			db = openDatabase(dbname, dbversion, dbdisplayName, 50 * 1024);      
			for (i = 0; i < 7; i++){
				do {
					// Validar que no seleccione el que se va a responder
					aleatorio = Math.floor((Math.random()*max)+1);
				} while ($.inArray(aleatorio,numAleatorios)!="-1");
			   numAleatorios.push(aleatorio);
			   tx.executeSql("INSERT INTO RANDOMDROP (id_equipo) VALUES (?)", [aleatorio]);		
			}
        });	
	}

	function DeleteRandomDrop(){
		db = openDatabase(dbname, dbversion, dbdisplayName, 50 * 1024);        
		db.transaction(function (ax) {
			ax.executeSql('DROP TABLE RANDOMDROP', []);
			ax.executeSql("CREATE TABLE IF NOT EXISTS RANDOMDROP(id_random INTEGER PRIMARY KEY AUTOINCREMENT, id_equipo INT, nombre TEXT)");                        
		});
    }
	/* === /FUNCTIONS LOGS QUIZ === */
	
	/* === FUNCTIONS MILLER BOWL === */
	function DeleteNow(){
		db = openDatabase(dbname, dbversion, dbdisplayName, 50 * 1024);	
		db.transaction(function (ax) {
			ax.executeSql('DROP TABLE TEMPORAL', []);
			ax.executeSql("CREATE TABLE IF NOT EXISTS TEMPORAL(id_temp INTEGER PRIMARY KEY AUTOINCREMENT, temp INT)");	
			ax.executeSql('DROP TABLE RANDOMDROPB', []);
			ax.executeSql("CREATE TABLE IF NOT EXISTS RANDOMDROPB(id_random INTEGER PRIMARY KEY AUTOINCREMENT, id_equipo INT, nombre TEXT)");			
		});
	}
	
	function RandomPreg(){
		var numAleatorios = [];
		db.transaction(function (tx) {
			var max = 32;
			var aleatorio = 0;  
			db = openDatabase(dbname, dbversion, dbdisplayName, 50 * 1024);      
			for (i = 1; i <= 3; i++){
				do {
					aleatorio = Math.floor((Math.random()*max)+1);
				} while ($.inArray(aleatorio,numAleatorios)!="-1");
				   numAleatorios.push(aleatorio);
				   tx.executeSql("INSERT INTO TEMPORAL (temp) VALUES (?)", [aleatorio]);		
			}
		});	
	}

	function RandomDrop(){
		var numAleatorios = [];
		db.transaction(function (tx) {
			var max = 32;
			var aleatorio = 0;  
			db = openDatabase(dbname, dbversion, dbdisplayName, 50 * 1024);      
			for (i = 0; i <= 7; i++){
				do {
					aleatorio = Math.floor((Math.random()*max)+1);
				} while ($.inArray(aleatorio,numAleatorios)!="-1");
				   numAleatorios.push(aleatorio);
				   tx.executeSql("INSERT INTO RANDOMDROPB (id_equipo) VALUES (?)", [aleatorio]);		
			}
		});	
	}
		
	function NuevoJuego(){
		db = openDatabase(dbname, dbversion, dbdisplayName, 50 * 1024);	
		db.transaction(function (yx) {
			yx.executeSql('DROP TABLE RANDOMDROPB', []);
			yx.executeSql("CREATE TABLE IF NOT EXISTS RANDOMDROPB (id_random INTEGER PRIMARY KEY AUTOINCREMENT, id_equipo INT, nombre TEXT)");
		})
	}
	/* === /FUNCTIONS MILLER BOWL === */