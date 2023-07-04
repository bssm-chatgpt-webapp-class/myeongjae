create table user (
    id int not null primary key auto_increment,
    email varchar(255) not null,
    pw varchar(255) not null,
    authorId int not null
)