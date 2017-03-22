Photographers table:

 photographers CREATE TABLE `photographers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fname` varchar(20) DEFAULT NULL,
  `lname` varchar(20) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `email` varchar(254) DEFAULT NULL,
  `tier` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 

Contracts table:

 contracts  CREATE TABLE `contracts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type_of_shoot` char(25) DEFAULT NULL,
  `vendor_id` int(11) DEFAULT NULL,
  `vendor_paid` char(1) DEFAULT NULL,
  `amount_for_vendor` varchar(20) DEFAULT NULL,
  `SLA_NET` varchar(20) DEFAULT NULL,
  `SLA_GROSS` varchar(20) DEFAULT NULL,
  `method_of_payment` varchar(20) DEFAULT NULL,
  `sent_payment_reminder` varchar(25) DEFAULT NULL,
  `location_id` int(11) DEFAULT NULL,
  `post_shoot_email` char(50) DEFAULT NULL,
  `agent_id` int(11) DEFAULT NULL,
  `confirmation_sent` varchar(20) DEFAULT NULL,
  `customer_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 

Customers table:

 customers  CREATE TABLE `customers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fname` char(20) DEFAULT NULL,
  `lname` char(20) DEFAULT NULL,
  `email` varchar(25) DEFAULT NULL,
  `phone_number` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 

Agents table:

 agents  CREATE TABLE `agents` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fname` char(20) DEFAULT NULL,
  `lname` char(20) DEFAULT NULL,
  `email` varchar(25) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 

Location table:

 location  CREATE TABLE `location` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `square_feet` varchar(25) DEFAULT NULL,
  `address` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 