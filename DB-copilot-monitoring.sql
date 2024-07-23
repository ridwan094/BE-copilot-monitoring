--
-- PostgreSQL database dump
--

-- Dumped from database version 14.12 (Homebrew)
-- Dumped by pg_dump version 14.12 (Homebrew)

-- Started on 2024-07-23 08:08:10 WIB

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: entrustinv043
--


--
-- TOC entry 3695 (class 0 OID 0)
-- Dependencies: 3
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: entrustinv043
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 213 (class 1259 OID 6595799)
-- Name: LogCopilots; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."LogCopilots" (
    id integer NOT NULL,
    id_user_bridev integer NOT NULL,
    actor character varying(255),
    "timestamp" timestamp with time zone NOT NULL
);


ALTER TABLE public."LogCopilots" OWNER TO postgres;

--
-- TOC entry 212 (class 1259 OID 6595798)
-- Name: LogCopilots_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."LogCopilots_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."LogCopilots_id_seq" OWNER TO postgres;

--
-- TOC entry 3696 (class 0 OID 0)
-- Dependencies: 212
-- Name: LogCopilots_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."LogCopilots_id_seq" OWNED BY public."LogCopilots".id;


--
-- TOC entry 215 (class 1259 OID 6595811)
-- Name: LogDailyBridevs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."LogDailyBridevs" (
    id integer NOT NULL,
    sheet_name character varying(255),
    id_user_bridev integer,
    jumlah_hit integer,
    "timestamp" timestamp with time zone
);


ALTER TABLE public."LogDailyBridevs" OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 6595810)
-- Name: LogDailyBridevs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."LogDailyBridevs_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."LogDailyBridevs_id_seq" OWNER TO postgres;

--
-- TOC entry 3697 (class 0 OID 0)
-- Dependencies: 214
-- Name: LogDailyBridevs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."LogDailyBridevs_id_seq" OWNED BY public."LogDailyBridevs".id;


--
-- TOC entry 223 (class 1259 OID 6595852)
-- Name: Roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Roles" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Roles" OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 6595851)
-- Name: Roles_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Roles_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Roles_id_seq" OWNER TO postgres;

--
-- TOC entry 3698 (class 0 OID 0)
-- Dependencies: 222
-- Name: Roles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Roles_id_seq" OWNED BY public."Roles".id;


--
-- TOC entry 209 (class 1259 OID 6594605)
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 6595832)
-- Name: Suspects; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Suspects" (
    no integer NOT NULL,
    email_work character varying(255),
    email_bri character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Suspects" OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 6595831)
-- Name: Suspects_no_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Suspects_no_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Suspects_no_seq" OWNER TO postgres;

--
-- TOC entry 3699 (class 0 OID 0)
-- Dependencies: 218
-- Name: Suspects_no_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Suspects_no_seq" OWNED BY public."Suspects".no;


--
-- TOC entry 211 (class 1259 OID 6595783)
-- Name: UserBridevs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."UserBridevs" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    email_work character varying(255) NOT NULL,
    email_brilian character varying(255) NOT NULL,
    status integer DEFAULT 1 NOT NULL,
    "createdAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."UserBridevs" OWNER TO postgres;

--
-- TOC entry 210 (class 1259 OID 6595782)
-- Name: UserBridevs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."UserBridevs_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."UserBridevs_id_seq" OWNER TO postgres;

--
-- TOC entry 3700 (class 0 OID 0)
-- Dependencies: 210
-- Name: UserBridevs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."UserBridevs_id_seq" OWNED BY public."UserBridevs".id;


--
-- TOC entry 221 (class 1259 OID 6595841)
-- Name: Users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Users" (
    id integer NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    role_id integer,
    is_login boolean DEFAULT false
);


ALTER TABLE public."Users" OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 6595840)
-- Name: Users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Users_id_seq" OWNER TO postgres;

--
-- TOC entry 3701 (class 0 OID 0)
-- Dependencies: 220
-- Name: Users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Users_id_seq" OWNED BY public."Users".id;


--
-- TOC entry 217 (class 1259 OID 6595823)
-- Name: WhitelistUsers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."WhitelistUsers" (
    id integer NOT NULL,
    email_work character varying(255),
    "createdAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."WhitelistUsers" OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 6595822)
-- Name: WhitelistUsers_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."WhitelistUsers_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."WhitelistUsers_id_seq" OWNER TO postgres;

--
-- TOC entry 3702 (class 0 OID 0)
-- Dependencies: 216
-- Name: WhitelistUsers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."WhitelistUsers_id_seq" OWNED BY public."WhitelistUsers".id;


--
-- TOC entry 225 (class 1259 OID 6595867)
-- Name: whitelist_users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.whitelist_users (
    id integer NOT NULL,
    email_work character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.whitelist_users OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 6595866)
-- Name: whitelist_users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.whitelist_users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.whitelist_users_id_seq OWNER TO postgres;

--
-- TOC entry 3703 (class 0 OID 0)
-- Dependencies: 224
-- Name: whitelist_users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.whitelist_users_id_seq OWNED BY public.whitelist_users.id;


--
-- TOC entry 3495 (class 2604 OID 6595802)
-- Name: LogCopilots id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."LogCopilots" ALTER COLUMN id SET DEFAULT nextval('public."LogCopilots_id_seq"'::regclass);


--
-- TOC entry 3496 (class 2604 OID 6595814)
-- Name: LogDailyBridevs id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."LogDailyBridevs" ALTER COLUMN id SET DEFAULT nextval('public."LogDailyBridevs_id_seq"'::regclass);


--
-- TOC entry 3503 (class 2604 OID 6595855)
-- Name: Roles id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Roles" ALTER COLUMN id SET DEFAULT nextval('public."Roles_id_seq"'::regclass);


--
-- TOC entry 3500 (class 2604 OID 6595835)
-- Name: Suspects no; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Suspects" ALTER COLUMN no SET DEFAULT nextval('public."Suspects_no_seq"'::regclass);


--
-- TOC entry 3491 (class 2604 OID 6595786)
-- Name: UserBridevs id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."UserBridevs" ALTER COLUMN id SET DEFAULT nextval('public."UserBridevs_id_seq"'::regclass);


--
-- TOC entry 3501 (class 2604 OID 6595844)
-- Name: Users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users" ALTER COLUMN id SET DEFAULT nextval('public."Users_id_seq"'::regclass);


--
-- TOC entry 3497 (class 2604 OID 6595826)
-- Name: WhitelistUsers id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."WhitelistUsers" ALTER COLUMN id SET DEFAULT nextval('public."WhitelistUsers_id_seq"'::regclass);


--
-- TOC entry 3504 (class 2604 OID 6595870)
-- Name: whitelist_users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.whitelist_users ALTER COLUMN id SET DEFAULT nextval('public.whitelist_users_id_seq'::regclass);


--
-- TOC entry 3677 (class 0 OID 6595799)
-- Dependencies: 213
-- Data for Name: LogCopilots; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3679 (class 0 OID 6595811)
-- Dependencies: 215
-- Data for Name: LogDailyBridevs; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3687 (class 0 OID 6595852)
-- Dependencies: 223
-- Data for Name: Roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Roles" VALUES (1, 'Super Admin', '2024-07-22 14:11:29.6+07', '2024-07-22 14:11:29.6+07');
INSERT INTO public."Roles" VALUES (2, 'Admin', '2024-07-22 14:11:29.6+07', '2024-07-22 14:11:29.6+07');


--
-- TOC entry 3673 (class 0 OID 6594605)
-- Dependencies: 209
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."SequelizeMeta" VALUES ('20240710112230-create-user-bridev.js');
INSERT INTO public."SequelizeMeta" VALUES ('20240711065612-create-log-copilot.js');
INSERT INTO public."SequelizeMeta" VALUES ('20240715023512-create-log-daily-bridev.js');
INSERT INTO public."SequelizeMeta" VALUES ('20240718235355-create-whitelist-user.js');
INSERT INTO public."SequelizeMeta" VALUES ('20240719024633-create-suspects.js');
INSERT INTO public."SequelizeMeta" VALUES ('20240722062357-create-user.js');
INSERT INTO public."SequelizeMeta" VALUES ('20240722063029-create-role.js');
INSERT INTO public."SequelizeMeta" VALUES ('20240722065357-update-user-table.js');


--
-- TOC entry 3683 (class 0 OID 6595832)
-- Dependencies: 219
-- Data for Name: Suspects; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Suspects" VALUES (1, 'christian.doxa@work.bri.co.id', 'christian.doxa.hamasiah@brilian.bri.co.id', '2024-07-01 04:52:45+07', '2024-07-01 04:52:44+07');
INSERT INTO public."Suspects" VALUES (2, 'apriantoni@work.bri.co.id', 'apriantoni.332986@brilian.bri.co.id', '2024-07-02 07:08:10+07', '2024-07-02 07:08:09+07');
INSERT INTO public."Suspects" VALUES (3, NULL, 'ridiarjonolumbangaol@brilian.bri.co.id', '2024-07-04 17:25:25+07', '2024-07-04 17:25:25+07');
INSERT INTO public."Suspects" VALUES (4, 'hamam@work.bri.co.id', 'hamam.abdurrachman@brilian.bri.co.id', '2024-07-09 10:29:32+07', '2024-07-09 10:29:31+07');
INSERT INTO public."Suspects" VALUES (5, NULL, 'hanamariasiahaan@corp.bri.co.id', '2024-07-10 15:16:22+07', '2024-07-10 15:16:22+07');
INSERT INTO public."Suspects" VALUES (6, NULL, 'ruben.ferry@brilian.bri.co.id', '2024-07-10 14:25:29+07', '2024-07-10 14:25:28+07');
INSERT INTO public."Suspects" VALUES (7, NULL, 'ruben.ferry@brilian.bri.co.id', '2024-07-17 20:30:36+07', '2024-07-17 20:30:35+07');


--
-- TOC entry 3675 (class 0 OID 6595783)
-- Dependencies: 211
-- Data for Name: UserBridevs; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3685 (class 0 OID 6595841)
-- Dependencies: 221
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Users" VALUES (2, 'oktavian@gmail.com', '$2a$10$gM1DmTW2pq1inIqUROOWMOSNF2tR8q0QQYZJe38Wj56IYIa4bhhdm', '2024-07-22 14:11:29.683+07', '2024-07-22 15:55:01.181+07', 1, false);
INSERT INTO public."Users" VALUES (1, 'taufiq@gmail.com', '$2a$10$gM1DmTW2pq1inIqUROOWMOSNF2tR8q0QQYZJe38Wj56IYIa4bhhdm', '2024-07-22 14:11:29.683+07', '2024-07-22 16:46:04.779+07', 1, false);
INSERT INTO public."Users" VALUES (3, 'admin@gmail.com', '$2a$10$gM1DmTW2pq1inIqUROOWMOSNF2tR8q0QQYZJe38Wj56IYIa4bhhdm', '2024-07-22 14:11:29.683+07', '2024-07-22 16:46:12.178+07', 2, true);


--
-- TOC entry 3681 (class 0 OID 6595823)
-- Dependencies: 217
-- Data for Name: WhitelistUsers; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."WhitelistUsers" VALUES (45, 'mohammad.fakhry@work.bri.co.id', '2024-07-22 14:11:29.597193+07', '2024-07-22 14:11:29.597193+07');
INSERT INTO public."WhitelistUsers" VALUES (46, 'rudi.atmojo@work.bri.co.id', '2024-07-22 14:11:29.597193+07', '2024-07-22 14:11:29.597193+07');
INSERT INTO public."WhitelistUsers" VALUES (47, 'bimo.wicaksono@work.bri.co.id', '2024-07-22 14:11:29.597193+07', '2024-07-22 14:11:29.597193+07');
INSERT INTO public."WhitelistUsers" VALUES (48, 'ichwanul.hakim@work.bri.co.id', '2024-07-22 14:11:29.597193+07', '2024-07-22 14:11:29.597193+07');
INSERT INTO public."WhitelistUsers" VALUES (49, 'bendan_lukito@work.bri.co.id', '2024-07-22 14:11:29.597193+07', '2024-07-22 14:11:29.597193+07');
INSERT INTO public."WhitelistUsers" VALUES (50, 'fadeli.priyanta@work.bri.co.id', '2024-07-22 14:11:29.597193+07', '2024-07-22 14:11:29.597193+07');
INSERT INTO public."WhitelistUsers" VALUES (51, 'kadek.wisnu@work.bri.co.id', '2024-07-22 14:11:29.597193+07', '2024-07-22 14:11:29.597193+07');
INSERT INTO public."WhitelistUsers" VALUES (52, 'yoga.arie@work.bri.co.id', '2024-07-22 14:11:29.597193+07', '2024-07-22 14:11:29.597193+07');
INSERT INTO public."WhitelistUsers" VALUES (53, 'reza.prasetio@work.bri.co.id', '2024-07-22 14:11:29.597193+07', '2024-07-22 14:11:29.597193+07');
INSERT INTO public."WhitelistUsers" VALUES (54, 'givanni.trisya@work.bri.co.id', '2024-07-22 14:11:29.597193+07', '2024-07-22 14:11:29.597193+07');
INSERT INTO public."WhitelistUsers" VALUES (55, 'desty.rizqiana@work.bri.co.id', '2024-07-22 14:11:29.597193+07', '2024-07-22 14:11:29.597193+07');


--
-- TOC entry 3689 (class 0 OID 6595867)
-- Dependencies: 225
-- Data for Name: whitelist_users; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3704 (class 0 OID 0)
-- Dependencies: 212
-- Name: LogCopilots_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."LogCopilots_id_seq"', 1, false);


--
-- TOC entry 3705 (class 0 OID 0)
-- Dependencies: 214
-- Name: LogDailyBridevs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."LogDailyBridevs_id_seq"', 1, false);


--
-- TOC entry 3706 (class 0 OID 0)
-- Dependencies: 222
-- Name: Roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Roles_id_seq"', 2, true);


--
-- TOC entry 3707 (class 0 OID 0)
-- Dependencies: 218
-- Name: Suspects_no_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Suspects_no_seq"', 7, true);


--
-- TOC entry 3708 (class 0 OID 0)
-- Dependencies: 210
-- Name: UserBridevs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."UserBridevs_id_seq"', 1, false);


--
-- TOC entry 3709 (class 0 OID 0)
-- Dependencies: 220
-- Name: Users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Users_id_seq"', 3, true);


--
-- TOC entry 3710 (class 0 OID 0)
-- Dependencies: 216
-- Name: WhitelistUsers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."WhitelistUsers_id_seq"', 55, true);


--
-- TOC entry 3711 (class 0 OID 0)
-- Dependencies: 224
-- Name: whitelist_users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.whitelist_users_id_seq', 1, false);


--
-- TOC entry 3514 (class 2606 OID 6595804)
-- Name: LogCopilots LogCopilots_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."LogCopilots"
    ADD CONSTRAINT "LogCopilots_pkey" PRIMARY KEY (id);


--
-- TOC entry 3516 (class 2606 OID 6595816)
-- Name: LogDailyBridevs LogDailyBridevs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."LogDailyBridevs"
    ADD CONSTRAINT "LogDailyBridevs_pkey" PRIMARY KEY (id);


--
-- TOC entry 3526 (class 2606 OID 6595859)
-- Name: Roles Roles_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Roles"
    ADD CONSTRAINT "Roles_name_key" UNIQUE (name);


--
-- TOC entry 3528 (class 2606 OID 6595857)
-- Name: Roles Roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Roles"
    ADD CONSTRAINT "Roles_pkey" PRIMARY KEY (id);


--
-- TOC entry 3506 (class 2606 OID 6594609)
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- TOC entry 3520 (class 2606 OID 6595839)
-- Name: Suspects Suspects_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Suspects"
    ADD CONSTRAINT "Suspects_pkey" PRIMARY KEY (no);


--
-- TOC entry 3508 (class 2606 OID 6595797)
-- Name: UserBridevs UserBridevs_email_brilian_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."UserBridevs"
    ADD CONSTRAINT "UserBridevs_email_brilian_key" UNIQUE (email_brilian);


--
-- TOC entry 3510 (class 2606 OID 6595795)
-- Name: UserBridevs UserBridevs_email_work_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."UserBridevs"
    ADD CONSTRAINT "UserBridevs_email_work_key" UNIQUE (email_work);


--
-- TOC entry 3512 (class 2606 OID 6595793)
-- Name: UserBridevs UserBridevs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."UserBridevs"
    ADD CONSTRAINT "UserBridevs_pkey" PRIMARY KEY (id);


--
-- TOC entry 3522 (class 2606 OID 6595850)
-- Name: Users Users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key" UNIQUE (email);


--
-- TOC entry 3524 (class 2606 OID 6595848)
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);


--
-- TOC entry 3518 (class 2606 OID 6595830)
-- Name: WhitelistUsers WhitelistUsers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."WhitelistUsers"
    ADD CONSTRAINT "WhitelistUsers_pkey" PRIMARY KEY (id);


--
-- TOC entry 3530 (class 2606 OID 6595872)
-- Name: whitelist_users whitelist_users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.whitelist_users
    ADD CONSTRAINT whitelist_users_pkey PRIMARY KEY (id);


--
-- TOC entry 3531 (class 2606 OID 6595805)
-- Name: LogCopilots LogCopilots_id_user_bridev_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."LogCopilots"
    ADD CONSTRAINT "LogCopilots_id_user_bridev_fkey" FOREIGN KEY (id_user_bridev) REFERENCES public."UserBridevs"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3532 (class 2606 OID 6595817)
-- Name: LogDailyBridevs LogDailyBridevs_id_user_bridev_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."LogDailyBridevs"
    ADD CONSTRAINT "LogDailyBridevs_id_user_bridev_fkey" FOREIGN KEY (id_user_bridev) REFERENCES public."UserBridevs"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3533 (class 2606 OID 6595860)
-- Name: Users Users_role_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_role_id_fkey" FOREIGN KEY (role_id) REFERENCES public."Roles"(id) ON UPDATE CASCADE ON DELETE SET NULL;


-- Completed on 2024-07-23 08:08:10 WIB

--
-- PostgreSQL database dump complete
--

