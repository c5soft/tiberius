var searchIndex={};
searchIndex["tiberius"] = {"doc":"A pure-rust TDS implementation for Microsoft SQL Server…","i":[[3,"Uuid","tiberius","A Universally Unique Identifier (UUID).",null,null],[3,"Client","","`Client` is the main entry point to the SQL Server,…",null,null],[3,"ClientBuilder","","",null,null],[3,"QueryResult","","A set of `Streams` of [`Rows`] resulting from a `SELECT`…",null,null],[3,"ExecuteResult","","A `Stream` of counts of affected rows resulting from an…",null,null],[3,"Column","","",null,null],[3,"Row","","",null,null],[4,"AuthMethod","","",null,null],[13,"None","","",0,null],[13,"SqlServer","","SQL Server integrated authentication",0,null],[12,"user","tiberius::AuthMethod","",1,null],[12,"password","","",1,null],[4,"Error","tiberius","A unified error enum that contains several errors that…",null,null],[13,"Io","","",2,null],[13,"Protocol","","",2,null],[13,"Encoding","","",2,null],[13,"Conversion","","",2,null],[13,"Utf8","","",2,null],[13,"Utf16","","",2,null],[13,"ParseInt","","",2,null],[13,"Server","","",2,null],[13,"Canceled","","",2,null],[13,"Tls","","",2,null],[4,"EncryptionLevel","","The configured encryption level specifying if encryption…",null,null],[13,"Off","","Only use encryption for the login procedure",3,null],[13,"On","","Encrypt everything if possible",3,null],[13,"NotSupported","","Do not encrypt anything",3,null],[13,"Required","","Encrypt everything and fail if not possible",3,null],[11,"host","","",4,[[["self"]]]],[11,"port","","",4,[[["u16"],["self"]]]],[11,"database","","",4,[[["self"]]]],[11,"instance_name","","",4,[[["self"]]]],[11,"ssl","","",4,[[["self"],["encryptionlevel"]]]],[11,"trust_cert","","",4,[[["self"]]]],[11,"authentication","","",4,[[["self"],["authmethod"]]]],[11,"build","","",4,[[]]],[11,"sql_server","","",0,[[],["self"]]],[11,"builder","","Starts an instance of [`ClientBuilder`] for specifying the…",5,[[],["clientbuilder"]]],[11,"execute","","Executes SQL statements in the SQL Server, returning the…",5,[[["self"]]]],[11,"query","","Executes SQL statements in the SQL Server, returning…",5,[[["self"]]]],[11,"columns","","Names of the columns of the current resultset. Order is…",6,[[["self"]],[["str"],["vec",["str"]]]]],[11,"next_resultset","","Returns `true` if stream has more result sets available.…",6,[[["self"]],["bool"]]],[11,"into_vec","","Collects results from all queries in the stream into…",6,[[]]],[11,"into_first","","A convenience method on collecting the results of the…",6,[[]]],[11,"total","","Aggregates all resulting row counts into a sum.",7,[[]]],[11,"name","","",8,[[["self"]],["str"]]],[11,"columns","","",9,[[["self"]]]],[11,"len","","Returns the amount of columns in the row",9,[[["self"]],["usize"]]],[11,"get","","Retrieve a column's value for a given column index",9,[[["i"],["self"]],["r"]]],[11,"try_get","","",9,[[["i"],["self"]],[["result",["option"]],["option"]]]],[6,"Result","","",null,null],[14,"uint_enum","","",null,null],[14,"to_sql","","",null,null],[14,"from_column_data","","",null,null],[11,"from","","",10,[[["t"]],["t"]]],[11,"into","","",10,[[],["u"]]],[11,"to_owned","","",10,[[["self"]],["t"]]],[11,"clone_into","","",10,[[["self"],["t"]]]],[11,"to_string","","",10,[[["self"]],["string"]]],[11,"try_from","","",10,[[["u"]],["result"]]],[11,"try_into","","",10,[[],["result"]]],[11,"borrow","","",10,[[["self"]],["t"]]],[11,"borrow_mut","","",10,[[["self"]],["t"]]],[11,"type_id","","",10,[[["self"]],["typeid"]]],[11,"vzip","","",10,[[],["v"]]],[11,"from","","",5,[[["t"]],["t"]]],[11,"into","","",5,[[],["u"]]],[11,"try_from","","",5,[[["u"]],["result"]]],[11,"try_into","","",5,[[],["result"]]],[11,"borrow","","",5,[[["self"]],["t"]]],[11,"borrow_mut","","",5,[[["self"]],["t"]]],[11,"type_id","","",5,[[["self"]],["typeid"]]],[11,"vzip","","",5,[[],["v"]]],[11,"from","","",4,[[["t"]],["t"]]],[11,"into","","",4,[[],["u"]]],[11,"to_owned","","",4,[[["self"]],["t"]]],[11,"clone_into","","",4,[[["self"],["t"]]]],[11,"try_from","","",4,[[["u"]],["result"]]],[11,"try_into","","",4,[[],["result"]]],[11,"borrow","","",4,[[["self"]],["t"]]],[11,"borrow_mut","","",4,[[["self"]],["t"]]],[11,"type_id","","",4,[[["self"]],["typeid"]]],[11,"vzip","","",4,[[],["v"]]],[11,"from","","",6,[[["t"]],["t"]]],[11,"into","","",6,[[],["u"]]],[11,"try_from","","",6,[[["u"]],["result"]]],[11,"try_into","","",6,[[],["result"]]],[11,"borrow","","",6,[[["self"]],["t"]]],[11,"borrow_mut","","",6,[[["self"]],["t"]]],[11,"type_id","","",6,[[["self"]],["typeid"]]],[11,"try_poll_next","","",6,[[["context"],["pin"],["s"]],[["poll",["option"]],["option",["result"]]]]],[11,"vzip","","",6,[[],["v"]]],[11,"from","","",7,[[["t"]],["t"]]],[11,"into","","",7,[[],["u"]]],[11,"try_from","","",7,[[["u"]],["result"]]],[11,"try_into","","",7,[[],["result"]]],[11,"borrow","","",7,[[["self"]],["t"]]],[11,"borrow_mut","","",7,[[["self"]],["t"]]],[11,"type_id","","",7,[[["self"]],["typeid"]]],[11,"try_poll_next","","",7,[[["context"],["pin"],["s"]],[["poll",["option"]],["option",["result"]]]]],[11,"vzip","","",7,[[],["v"]]],[11,"from","","",8,[[["t"]],["t"]]],[11,"into","","",8,[[],["u"]]],[11,"try_from","","",8,[[["u"]],["result"]]],[11,"try_into","","",8,[[],["result"]]],[11,"borrow","","",8,[[["self"]],["t"]]],[11,"borrow_mut","","",8,[[["self"]],["t"]]],[11,"type_id","","",8,[[["self"]],["typeid"]]],[11,"vzip","","",8,[[],["v"]]],[11,"from","","",9,[[["t"]],["t"]]],[11,"into","","",9,[[],["u"]]],[11,"try_from","","",9,[[["u"]],["result"]]],[11,"try_into","","",9,[[],["result"]]],[11,"borrow","","",9,[[["self"]],["t"]]],[11,"borrow_mut","","",9,[[["self"]],["t"]]],[11,"type_id","","",9,[[["self"]],["typeid"]]],[11,"vzip","","",9,[[],["v"]]],[11,"from","","",0,[[["t"]],["t"]]],[11,"into","","",0,[[],["u"]]],[11,"to_owned","","",0,[[["self"]],["t"]]],[11,"clone_into","","",0,[[["self"],["t"]]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"try_into","","",0,[[],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"type_id","","",0,[[["self"]],["typeid"]]],[11,"vzip","","",0,[[],["v"]]],[11,"from","","",2,[[["t"]],["t"]]],[11,"into","","",2,[[],["u"]]],[11,"to_owned","","",2,[[["self"]],["t"]]],[11,"clone_into","","",2,[[["self"],["t"]]]],[11,"to_string","","",2,[[["self"]],["string"]]],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"try_into","","",2,[[],["result"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"type_id","","",2,[[["self"]],["typeid"]]],[11,"vzip","","",2,[[],["v"]]],[11,"from","","",3,[[["t"]],["t"]]],[11,"into","","",3,[[],["u"]]],[11,"to_owned","","",3,[[["self"]],["t"]]],[11,"clone_into","","",3,[[["self"],["t"]]]],[11,"try_from","","",3,[[["u"]],["result"]]],[11,"try_into","","",3,[[],["result"]]],[11,"borrow","","",3,[[["self"]],["t"]]],[11,"borrow_mut","","",3,[[["self"]],["t"]]],[11,"type_id","","",3,[[["self"]],["typeid"]]],[11,"vzip","","",3,[[],["v"]]],[11,"partial_cmp","","",10,[[["self"],["uuid"]],[["ordering"],["option",["ordering"]]]]],[11,"lt","","",10,[[["self"],["uuid"]],["bool"]]],[11,"le","","",10,[[["self"],["uuid"]],["bool"]]],[11,"gt","","",10,[[["self"],["uuid"]],["bool"]]],[11,"ge","","",10,[[["self"],["uuid"]],["bool"]]],[11,"fmt","","",10,[[["formatter"],["self"]],[["error"],["result",["error"]]]]],[11,"fmt","","",10,[[["formatter"],["self"]],[["error"],["result",["error"]]]]],[11,"fmt","","",10,[[["formatter"],["self"]],[["error"],["result",["error"]]]]],[11,"default","","",10,[[],["uuid"]]],[11,"eq","","",10,[[["self"],["uuid"]],["bool"]]],[11,"ne","","",10,[[["self"],["uuid"]],["bool"]]],[11,"clone","","",10,[[["self"]],["uuid"]]],[11,"hash","","",10,[[["self"],["__h"]]]],[11,"fmt","","",10,[[["formatter"],["self"]],[["error"],["result",["error"]]]]],[11,"cmp","","",10,[[["self"],["uuid"]],["ordering"]]],[11,"from_str","","",10,[[["str"]],[["uuid"],["result",["uuid"]]]]],[11,"from","","",2,[[["error"]],["self"]]],[11,"from","","",2,[[["error"]],["self"]]],[11,"from","","",2,[[["infallible"]],["self"]]],[11,"from","","",2,[[["error"]],["error"]]],[11,"from","","",2,[[["parseinterror"]],["error"]]],[11,"from","","",2,[[["utf8error"]],["error"]]],[11,"from","","",2,[[["fromutf8error"]],["error"]]],[11,"from","","",2,[[["fromutf16error"]],["error"]]],[11,"clone","","",4,[[["self"]],["clientbuilder"]]],[11,"clone","","",0,[[["self"]],["authmethod"]]],[11,"clone","","",2,[[["self"]],["error"]]],[11,"clone","","",3,[[["self"]],["encryptionlevel"]]],[11,"default","","",4,[[],["self"]]],[11,"eq","","",3,[[["encryptionlevel"],["self"]],["bool"]]],[11,"fmt","","",4,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",0,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",2,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",8,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",9,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",3,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",2,[[["formatter"],["self"]],["result"]]],[11,"try_from","","",3,[[["u8"]],[["encryptionlevel"],["result",["encryptionlevel"]]]]],[11,"try_from","","",3,[[["u32"]],[["encryptionlevel"],["result",["encryptionlevel"]]]]],[11,"poll_next","","",6,[[["self"],["context"],["pin"]],[["poll",["option"]],["option"]]]],[11,"poll_next","","",7,[[["self"],["context"],["pin"]],[["poll",["option"]],["option"]]]],[11,"nil","","The 'nil UUID'.",10,[[],["uuid"]]],[11,"from_fields","","Creates a UUID from four field values in big-endian order.",10,[[["u16"],["u32"]],[["uuid"],["result",["uuid","error"]],["error"]]]],[11,"from_fields_le","","Creates a UUID from four field values in little-endian…",10,[[["u16"],["u32"]],[["uuid"],["result",["uuid","error"]],["error"]]]],[11,"from_u128","","Creates a UUID from a 128bit value in big-endian order.",10,[[["u128"]],["uuid"]]],[11,"from_u128_le","","Creates a UUID from a 128bit value in little-endian order.",10,[[["u128"]],["uuid"]]],[11,"from_slice","","Creates a UUID using the supplied big-endian bytes.",10,[[],[["uuid"],["result",["uuid","error"]],["error"]]]],[11,"from_bytes","","Creates a UUID using the supplied big-endian bytes.",10,[[],["uuid"]]],[11,"parse_str","","Parses a `Uuid` from a string of hexadecimal digits with…",10,[[["str"]],[["uuid"],["result",["uuid","error"]],["error"]]]],[11,"to_hyphenated","","Get a [`Hyphenated`] formatter.",10,[[],["hyphenated"]]],[11,"to_hyphenated_ref","","Get a borrowed [`HyphenatedRef`] formatter.",10,[[["self"]],["hyphenatedref"]]],[11,"to_simple","","Get a [`Simple`] formatter.",10,[[],["simple"]]],[11,"to_simple_ref","","Get a borrowed [`SimpleRef`] formatter.",10,[[["self"]],["simpleref"]]],[11,"to_urn","","Get a [`Urn`] formatter.",10,[[],["urn"]]],[11,"to_urn_ref","","Get a borrowed [`UrnRef`] formatter.",10,[[["self"]],["urnref"]]],[11,"new_v1","","Create a new UUID (version 1) using a time value +…",10,[[["timestamp"]],[["uuid"],["result",["uuid","error"]],["error"]]]],[11,"to_timestamp","","Returns an optional [`Timestamp`] storing the timestamp…",10,[[["self"]],[["option",["timestamp"]],["timestamp"]]]],[11,"new_v3","","Creates a UUID using a name from a namespace, based on the…",10,[[["uuid"]],["uuid"]]],[11,"new_v4","","Creates a random UUID.",10,[[],["uuid"]]],[18,"NAMESPACE_DNS","","UUID namespace for Domain Name System (DNS).",10,null],[18,"NAMESPACE_OID","","UUID namespace for ISO Object Identifiers (OIDs).",10,null],[18,"NAMESPACE_URL","","UUID namespace for Uniform Resource Locators (URLs).",10,null],[18,"NAMESPACE_X500","","UUID namespace for X.500 Distinguished Names (DNs).",10,null],[11,"get_variant","","Returns the variant of the UUID structure.",10,[[["self"]],[["variant"],["option",["variant"]]]]],[11,"get_version_num","","Returns the version number of the UUID.",10,[[["self"]],["usize"]]],[11,"get_version","","Returns the version of the UUID.",10,[[["self"]],[["option",["version"]],["version"]]]],[11,"as_fields","","Returns the four field values of the UUID in big-endian…",10,[[["self"]]]],[11,"to_fields_le","","Returns the four field values of the UUID in little-endian…",10,[[["self"]]]],[11,"as_u128","","Returns a 128bit value containing the UUID data.",10,[[["self"]],["u128"]]],[11,"to_u128_le","","Returns a 128bit little-endian value containing the UUID…",10,[[["self"]],["u128"]]],[11,"as_bytes","","Returns an array of 16 octets containing the UUID data.",10,[[["self"]]]],[11,"is_nil","","Tests if the UUID is nil.",10,[[["self"]],["bool"]]],[11,"encode_buffer","","A buffer that can be used for `encode_...` calls, that is…",10,[[]]]],"p":[[4,"AuthMethod"],[13,"SqlServer"],[4,"Error"],[4,"EncryptionLevel"],[3,"ClientBuilder"],[3,"Client"],[3,"QueryResult"],[3,"ExecuteResult"],[3,"Column"],[3,"Row"],[3,"Uuid"]]};
addSearchOptions(searchIndex);initSearch(searchIndex);